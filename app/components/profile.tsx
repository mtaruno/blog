import React from 'react';
import Image from 'next/image';

interface CompanyLogoProps {
  company: string;
  size?: number;
}

function CompanyLogo({ company, size = 48 }: CompanyLogoProps) {
  // Map company names to their logo files
  const logoMap: Record<string, string> = {
    'Amazon': '/images/amazon_logo.jpeg',
    'Zhipu.AI': '/images/zdotai_logo.jpeg',
    'Alibaba Cloud': '/images/alibaba_cloud_computing_company_logo.jpeg',
  };

  const logoPath = logoMap[company] || '';

  if (!logoPath) return null;

  return (
    <div className="flex-shrink-0 mr-4">
      <Image
        src={logoPath}
        alt={`${company} logo`}
        width={size}
        height={size}
        className="object-contain dark:brightness-110 dark:contrast-125"
        priority
        unoptimized
      />
    </div>
  );
}

export function Profile() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <h3 className="font-medium">University of Washington</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Sep 2023 – June 2026</p>
            </div>
            <p>Masters of Science in Technology Innovation, Robotics Track</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Dual Degree Program</p>
          </div>

          <div>
            <div className="flex justify-between">
              <h3 className="font-medium">Tsinghua University</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Sep 2024 – June 2026</p>
            </div>
            <p>Masters of Science in Data Science & Information Technology</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Dual Degree Program</p>
          </div>

          <div>
            <div className="flex justify-between">
              <h3 className="font-medium">University of Rochester</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Graduated 2021</p>
            </div>
            <p>Bachelor of Science in Data Science</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Minor in Business</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <CompanyLogo company="Amazon" />
                <div>
                  <h3 className="font-medium">Software Development Engineer Intern</h3>
                  <p className="italic">Amazon</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">Bellevue, WA | June 2025 – Present</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Architected and deployed a new event-driven data pipeline (SNS &rarr; SQS &rarr; Lambda &rarr; DynamoDB) using CloudFormation and cross-VPC PrivateLink network infrastructure in Java, optimizing for cost, efficiency, and simplicity to process millions of daily events and achieve an &gt; 80% reduction in infrastructure costs.</li>
              <li>Led the elimination of over 100B unused database entries by designing a more accurate data model and event source, directly improving the performance of downstream item classification systems.</li>
              <li>Authored a comprehensive low-level design (LLD) document analyzing system trade-offs, establishing a validation framework for the Beta rollout, and defining a robust rollback strategy for production stability.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <CompanyLogo company="Z.AI" />
                <div>
                  <h3 className="font-medium">Software Engineer Intern</h3>
                  <p className="italic">Zhipu.AI</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">Dec 2023 - July 2024</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Developed and researched software engineering agents (based on SWE-Agent and Agentless) on top of GLM family of models. Ran experiments and benchmarks to improve model software engineering performance.</li>
              <li>Curated a 250+ entry benchmark dataset from 10 open-source repos for internal RAG evaluation.</li>
              <li>Collaborated with engineering and product teams, providing key feedback on user experience to extend the CodeGeeX assistant's repository-level query understanding; leveraged retrieval algorithms, chunking, and in-context learning, achieving normalized top-K file retrieval accuracy of 35-50% as baseline performance.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <CompanyLogo company="Alibaba Cloud" />
                <div>
                  <h3 className="font-medium">Solutions Architect</h3>
                  <p className="italic">Alibaba Cloud</p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">Mar 2022 – July 2023</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Pre-sales consultant, trainer, and support engineer for cross-functional teams of engineers, business development, clients, and partners, directing the design and implementation of big data and AI initiatives for over 60 companies across fintech, airlines, logistics, and government sectors in Southeast Asia.</li>
              <li>Led key initiatives: Building OLAP data warehouse on cloud, data management and governance with DataWorks, cloud transactional database management, Hadoop ecosystem, real-time sync with Flink, cost/performance optimization, recommendation engine, and LLM integration with vector databases.</li>
              <li>Served as community public speaker in the tech industry (ACCI, Go Startup program, etc.) and academia (ITB, STIKOM, UGM, and ITATS) across Indonesia, in 30+ events and 2000+ participants.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <a
          href="https://github.com/mtaruno"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mtaruno"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mtaruno@uw.edu"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          mtaruno@uw.edu
        </a>
      </div>
    </div>
  );
}
