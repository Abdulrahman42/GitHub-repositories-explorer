// src/components/__tests__/ListRepoUser.test.tsx
import { render, screen } from "@testing-library/react";
import ListRepoUser from "../ListRepoUser";
import type { RepoType } from "../../types";

const mockRepo: RepoType = {
  name: "example-repo",
  description: "This is a great repo",
  stargazers_count: 42,
};

describe("ListRepoUser", () => {
  it("renders repo name, description, and stars", () => {
    render(<ListRepoUser data={mockRepo} />);

    // Check name and description
    expect(screen.getByText("example-repo")).toBeInTheDocument();
    expect(screen.getByText("This is a great repo")).toBeInTheDocument();

    // Check star count
    expect(screen.getByText("42")).toBeInTheDocument();

    // Check if the star icon is present
    expect(screen.getByText("star")).toBeInTheDocument();
  });
});
