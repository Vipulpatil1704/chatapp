import Sidebar from '../component/sidebar/Sidebar'
import MessageContainer from '../component/messages/MessageContainer'
export default function Home() {

  return (
    <div className='home-shell'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}
