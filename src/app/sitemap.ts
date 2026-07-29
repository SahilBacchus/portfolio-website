import { MetadataRoute } from "next";
import { execSync } from "child_process";

const BASE_URL = "https://www.sbacchus.com";

/**
 * Gets the latest Git commit date from a list of specific files or folders.
 * It will return the timestamp of whichever asset was modified most recently.
 */
function getLatestGitCommitDate(paths: string[]): Date {
  try {
    const pathsString = paths.join(" ");

    // Checks the Git log across all provided paths for the single most recent commit
    const command = `git log -1 --format=%cI -- ${pathsString}`;
    const commitDateStr = execSync(command).toString().trim();

    return new Date(commitDateStr);
  } catch (error) {
    // Fallback if running locally in a non-git environment
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homepageLastModified = getLatestGitCommitDate([
    "src/app/page.tsx",
    "src/components/AboutSection.tsx",
    "src/components/ExperienceSection.tsx",
    "src/components/EducationSection.tsx",
    "src/components/TechStack.tsx",
    "src/components/ProjectsSection.tsx",
  ]);

  return [
    {
      url: BASE_URL,
      lastModified: homepageLastModified, // Derived from git history
    },

    /* If in the future we expand to new pages, we can add them like this:
    {
      url: `${BASE_URL}/projects`,
      lastModified: projectsPageLastModified,
    },
    */
  ];
}
