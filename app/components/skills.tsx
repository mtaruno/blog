import React from 'react';

type SkillCategory = {
  title: string;
  skills: string[];
};

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: ["Python (Expert)", "C/C++", "Java", "JavaScript/TypeScript", "SQL", "R", "bash", "Lean4"]
    },
    {
      title: "Languages",
      skills: ["English and Indonesian (native)", "Mandarin (workplace-level)"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "git", "AWS (EC2, RDS, S3)", "GCP (BigQuery)", "Alibaba Cloud", "Kubernetes"]
    },
    {
      title: "System Design & Infrastructure",
      skills: ["Database design", "NoSQL", "Kafka", "Flink", "API development", "ROS2", "Airflow"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["PyTorch", "CUDA", "Triton", "scikit-learn", "pandas", "numpy", "Tableau", "spark"]
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tighter">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-3">{category.title}</h2>
            <ul className="space-y-1">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-neutral-700 dark:text-neutral-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
