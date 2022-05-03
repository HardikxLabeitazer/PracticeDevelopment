import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            {note.title}
            {note.description}
            <div className="card my-3" >
               
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}whatishte msjjlejrijladjlfjljsdjfljalsjdsfljalsjdfl
                        jaldjfljsldjflsjljfddjlj jljsdkfjiuoerejojre
                        lskdjfljljoiu joiwuoeuro hsahljlpup putjljelr peope
                        jaljjsj kaeuji ieiklll lskdjfljljoiu joiwuoeuro hsahljlpup putjljelr peope
                        jaljjsj kaeuji ieiklll
                         zerejljljl jjjljljlj </p>
                        
                    </div>
            </div>
        </div>
    )
}

export default NoteItem