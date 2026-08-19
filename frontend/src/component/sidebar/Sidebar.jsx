import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import { useAuthContext } from '../../context/AuthContext.jsx'
export default function Sidebar() {
  const { authUser } = useAuthContext();
  return (
    <aside className='sidebar-panel'>
        <div className='sidebar-brand'><div className='brand-mark'>C</div><div><p className='brand-title'>Convo</p><p className='sidebar-kicker'>Your messages</p></div></div>
        <div className='sidebar-user'><img src={authUser?.profilePic} alt='' /><div><strong>{authUser?.username}</strong><span>Available to chat</span></div></div>
        <SearchInput/>
        <Conversations/>
        <LogoutButton/>
    </aside>
  )
}
