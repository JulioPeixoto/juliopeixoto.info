import { FaGithub } from "react-icons/fa";

export const GitHubIcon = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-3 right-3"
      aria-label="GitHub Link"
    >
      <FaGithub size={30} className="hover:text-gray-500" />
    </a>
  );
};
