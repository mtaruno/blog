import { BlogPosts } from 'app/components/posts'
import { Profile } from 'app/components/profile'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tighter">
          Matthew Evan Taruno
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Software Engineer | Applied Scientist | Machine Learning Engineer
        </p>
        <p className="text-md text-neutral-600 dark:text-neutral-400">
          Amazon SDE Intern 2025
        </p>
        <div className="flex space-x-4 mt-2">
          <a href="tel:+12065917151" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200">
            +1(206)-591-7151
          </a>
          <a href="mailto:mtaruno@uw.edu" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200">
            mtaruno@uw.edu
          </a>
        </div>
      </div>

      <div className="my-8">
        <Profile />
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Recent Blog Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
