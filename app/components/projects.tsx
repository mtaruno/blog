import React from 'react';
import Link from 'next/link';

type Project = {
  title: string;
  description: string[];
  link?: string;
  linkText?: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "Hestia Parenting Copilot",
      description: [
        "Developed Hestia AI, a co-parenting assistant powered by a custom Graph RAG pipeline using Neo4j Aura, clustering, subgraph retrieval, and domain-specific ontology, integrating 300+ parenting resources.",
        "Built and launched a mobile application using Flutter with Firebase and Cloud Functions, enabling anonymous community interaction and intuitive chat interface; collaborated with 2 designers and 1 developer."
      ],
      link: "#",
      linkText: "Testflight"
    },
    {
      title: "PyTorch static shape checking via compilation to dependently typed language",
      description: [
        "Designed a compile-time static shape checker involving Python, C FFI, and Lean 4 to ergonomically detect shape mismatches for tensor operations; shape error represents 40% of deep learning bugs.",
        "Built a static analysis pipeline converting Python AST to a typed Lean AST using C as a wrapper, leveraging Lean 4 metaprogramming and custom type-checking tactics as an interactive theorem prover."
      ],
      link: "https://github.com/mtaruno/pytorch-shape-checker",
      linkText: "GitHub Repo"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tighter">Projects</h1>
      
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-medium">{project.title}</h2>
              {project.link && (
                <Link 
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkText || "Link"}
                </Link>
              )}
            </div>
            
            <div className="space-y-2">
              {project.description.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-neutral-700 dark:text-neutral-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
