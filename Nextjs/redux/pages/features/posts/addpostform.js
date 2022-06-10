import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'


import {postAdded} from './postSlice';
import { selectAllUsers  } from '../users/usersSlice';
const AddPostForm = () => {
    const [title,setTitle] = useState('');
    const[content,setContent]=useState('');
    const[userId,setuserId]=useState('');

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const onTitleChanged = e =>setTitle(e.target.value);
    const onContentChanged = e=>setContent(e.target.value);
    const onAuthorChanged = e=>setuserId(e.target.value)

    const onSavePostClicked =()=>{
        if(title && content){
            dispatch(postAdded(title,content,userId))
            setTitle('');
            setContent('');
        }
    }
    
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
 
 
    return (
    <section className='text-center  p-5'>
        <h2>Add a new Post</h2>
        <form className=' flex flex-col '>
            <div className='flex justify-center'>
               <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            className='m-1 w-[200px] border-2'
            /> 
            </div>
            <label htmlFor='postAuthor'>Author</label>
            <select id="postAuthor" className='bg-white border-2' value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {userOptions}
            </select>
            
            <label htmlFor='postContent'>Content</label>
            <textarea 
            id="postContent"
            name="postContent"
            value={content}
            className="border-2 m-1"
            onChange={onContentChanged}
            />
            <button disabled={!canSave} className='font-semibold' onClick={onSavePostClicked} type="button">Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm