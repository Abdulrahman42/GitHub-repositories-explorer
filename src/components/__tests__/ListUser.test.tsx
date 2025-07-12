import { render, screen } from "@testing-library/react";
import ListUser from "../ListUser";
import { useGitHub } from "../../context/GithubContext";
import type { RepoType, UserType } from "../../types";

jest.mock("../../context/GithubContext", () => ({
  useGitHub: jest.fn(),
}));

const mockUsers: UserType[] = [
  { login: "user1" },
  { login: "user2" },
];

const mockRepos: RepoType[] = [
  {
    name: "repo-one",
    description: "This is repo one",
    stargazers_count: 10,
  },
  {
    name: "repo-two",
    description: "This is repo two",
    stargazers_count: 5,
  },
];

const getUserReposMock = jest.fn();

describe("ListUser", () => {
  beforeEach(() => {
    (useGitHub as jest.Mock).mockReturnValue({
      users: mockUsers,
      listRepoByUser: mockRepos,
      getUserRepos: getUserReposMock,
      loading: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("shows loading state if loading is true", () => {
    (useGitHub as jest.Mock).mockReturnValue({
      users: [],
      listRepoByUser: [],
      getUserRepos: jest.fn(),
      loading: true,
    });

    render(<ListUser />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
