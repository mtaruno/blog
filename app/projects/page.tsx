import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My projects and portfolio work.',
}

export default function Page() {
  return (
    <section>
      <Projects />
    </section>
  )
}
