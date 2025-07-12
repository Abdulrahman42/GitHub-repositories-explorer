/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from "react";
import type { RepoType, UserType } from "../types";
import { Octokit } from "octokit";

interface GitHubContextType {
  users: UserType[];
  listRepoByUser: RepoType[];
  loading: boolean;
  error: string | null;
  searchUsers: (query: string) => Promise<void>;
  getUserRepos: (username: string) => Promise<void>;
}

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

const Token = import.meta.env.VITE_GITHUB_TOKEN

const octokit = new Octokit({
  auth: Token
})

export const GitHubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [listRepoByUser, setListRepoByUser] = useState<RepoType[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  const searchUsers = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await octokit.request(`GET /search/users`, {
        q: query,
        per_page: 5,
        headers
      })
      setUsers(res.data.items);
      setListRepoByUser([]); // Clear repos
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getUserRepos = async (username: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await octokit.request(`GET /users/${username}/repos`, {
        username: username,
        headers
      })
      setListRepoByUser(res.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GitHubContext.Provider value={{ users, listRepoByUser, loading, error, searchUsers, getUserRepos }}>
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = (): GitHubContextType => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHub must be used within a GitHubProvider");
  }
  return context;
};
