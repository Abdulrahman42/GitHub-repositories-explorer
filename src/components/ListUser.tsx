import { useState } from "react";

import ListRepoUser from "./ListRepoUser";
import Loading from "./Loading";

import type { RepoType, UserType } from "../types";

import { useGitHub } from "../context/GithubContext";

const ListUser = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { users, listRepoByUser, getUserRepos, loading } = useGitHub();

  const toggle = (index: number, user: string) => {
    setOpenIndex((prev) => {
      if (prev === index) {
        return null;
      } else {
        getUserRepos(user);
        return index;
      }
    });
  };

  return (
    <div className="mt-4">
      {loading ? (
        <Loading />
      ) : (
        <>
          {users.map((user: UserType, index: number) => (
            <>
              <div
                key={index}
                onClick={() => toggle(index, user.login)}
                className="mb-2 cursor-pointer">
                <div className="flex items-center mb-4 bg-gray-300 justify-between w-full p-3 font-medium text-gray-700">
                  <span>{user.login}</span>
                  <span className="material-symbols-outlined">
                    {openIndex == index
                      ? "keyboard_arrow_up"
                      : "keyboard_arrow_down"}
                  </span>
                </div>
              </div>
              <div className={`${openIndex == index ? "ml-4" : "hidden"}`}>
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    {listRepoByUser.map((repo: RepoType, repoIndex: number) => (
                      <ListRepoUser data={repo} key={repoIndex} />
                    ))}
                  </>
                )}
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ListUser;
