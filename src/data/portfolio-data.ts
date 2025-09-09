export interface PortfolioItem {
  id: number;
  img: string;
  category: string;
  title: string;
  year: string;
  show: string;
  detailsPath: string;
}

export const portfolio_data: PortfolioItem[] = [
  // BRANDING PROJECTS (cat3)
  {
    id: 1,
    img: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
    category: "Branding",
    title: "Righteous Properties",
    year: "2024",
    show: "cat3",
    detailsPath: "/portfolio-details-17",
  },
  {
    id: 2,
    img: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
    category: "Branding",
    title: "Rizvi Institute of Management Studies & Research",
    year: "2023",
    show: "cat3",
    detailsPath: "/portfolio-details-16",
  },
  {
    id: 3,
    img: "/assets/img/inner-project/portfolio-col-2/port-3.jpg",
    category: "Branding",
    title: "Fat Man's Cafe",
    year: "2023",
    show: "cat3",
    detailsPath: "/portfolio-details-6",
  },
  {
    id: 4,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "Branding",
    title: "REDD",
    year: "2024",
    show: "cat3",
    detailsPath: "/portfolio-details-15",
  },
  {
    id: 5,
    img: "/assets/img/inner-project/portfolio-col-2/port-5.jpg",
    category: "Branding",
    title: "Officers Choice",
    year: "2024",
    show: "cat3",
    detailsPath: "/portfolio-details-13",
  },
  // GEN AI PROJECTS (cat1)
  {
    id: 6,
    img: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
    category: "Gen AI",
    title: "Gen AI Card",
    year: "2024",
    show: "cat1",
    detailsPath: "/portfolio-details-4",
  },
  // WEB DESIGN PROJECTS (cat4)
  {
    id: 7,
    img: "/assets/img/inner-project/portfolio-col-2/port-7.jpg",
    category: "Web Design",
    title: "Skoda",
    year: "2024",
    show: "cat4",
    detailsPath: "/portfolio-details-7",
  },
  {
    id: 8,
    img: "/assets/img/inner-project/portfolio-col-2/port-8.jpg",
    category: "Web Design",
    title: "Signi",
    year: "2024",
    show: "cat4",
    detailsPath: "/portfolio-details-22",
  },
  {
    id: 9,
    img: "/assets/img/inner-project/portfolio-col-2/port-9.jpg",
    category: "Web Design",
    title: "RW Science",
    year: "2024",
    show: "cat4",
    detailsPath: "/portfolio-details-9",
  },
  {
    id: 10,
    img: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
    category: "Web Design",
    title: "BGauss",
    year: "2024",
    show: "cat4",
    detailsPath: "/portfolio-details-10",
  },
  // TVC PROJECTS (cat5)
  {
    id: 11,
    img: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
    category: "TVC",
    title: "Tata AIA",
    year: "2024",
    show: "cat5",
    detailsPath: "/portfolio-details-11",
  },
  {
    id: 13,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "TVC",
    title: "JBCN",
    year: "2024",
    show: "cat5",
    detailsPath: "/portfolio-details-14",
  },
  // PRODUCTS (cat7)
  {
    id: 16,
    img: "/assets/img/inner-project/portfolio-col-2/port-7.jpg",
    category: "Products",
    title: "Speaking Tool",
    year: "2024",
    show: "cat7",
    detailsPath: "/portfolio-details-20",
  },
  {
    id: 17,
    img: "/assets/img/inner-project/portfolio-col-2/port-8.jpg",
    category: "Products",
    title: "Automation",
    year: "2024",
    show: "cat7",
    detailsPath: "/portfolio-details-21",
  },
];

// Helper function to get navigation data for a specific project
export function getPortfolioNavigation(currentPath: string) {
  const currentProject = portfolio_data.find(item => item.detailsPath === currentPath);
  
  if (!currentProject) {
    return { prev: null, next: null, category: null };
  }

  // Filter projects by the same category
  const categoryProjects = portfolio_data.filter(item => item.show === currentProject.show);
  
  // Find current project index in the category
  const currentIndex = categoryProjects.findIndex(item => item.detailsPath === currentPath);
  
  if (currentIndex === -1) {
    return { prev: null, next: null, category: currentProject.category };
  }

  const prevProject = currentIndex > 0 ? categoryProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < categoryProjects.length - 1 ? categoryProjects[currentIndex + 1] : null;

  return {
    prev: prevProject,
    next: nextProject,
    category: currentProject.category,
  };
}

// Helper function to get all projects in a category
export function getProjectsByCategory(categoryShow: string) {
  return portfolio_data.filter(item => item.show === categoryShow);
}

// Helper function to get project by path
export function getProjectByPath(path: string) {
  return portfolio_data.find(item => item.detailsPath === path);
}