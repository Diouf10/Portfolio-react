import { Children, createContext, useState } from "react";

export const ProjectContext = createContext

export default function ProjectContextProvider() {
  const [projets, setProjets] = useState([]);

  return(
    <ProjectContext.Provider value={{ projets, setProjets }}>
      {Children}
    </ProjectContext.Provider>
);

}