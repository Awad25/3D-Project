import dynamic from 'next/dynamic'

const ClassroomWithNoSSR = dynamic(() => import('../components/classroom'), {
  ssr: false
})

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ClassroomWithNoSSR />
    </div>
  )
}

