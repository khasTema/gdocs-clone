import React, { useEffect, useState, useRef } from 'react';
import PopUp from './PopUp';
import { addDoc, collection, onSnapshot} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Docs = ({database}) => { 

    const collectionRef = collection(database, 'docsData')

    const [open, setOpen] = useState(false);
    const [ title, setTitle ] = useState('');
    const [ docsData, setDocsData ] = useState([])


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addData = () => {
        addDoc(collectionRef, {
            title: title,
        })
        .then(() => {handleClose();})
        .catch(() => alert('cannot add data'))
    }

    const getData = () => {
        onSnapshot(collectionRef, (data) => {
            setDocsData(data.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))
        })
    }

    const isMounted = useRef()

    useEffect(() => {
        if(isMounted.current){
            return
        }
        isMounted.current = true
        getData()
        // eslint-disable-next-line
    }, [])
    
    let navigate = useNavigate()

    const getID = (id) => {
        navigate(`editDocs/${id}`)
    }



  return (
    <div className='docs-main'>
        <h1>Docs Clone</h1>

        <button className="add-docs" onClick={handleOpen}>
            Add a Document
        </button>
        <div className='grid-main'>
            {docsData.map((doc)=>{
                return (
                    <div className='grid-child' onClick={() => getID(doc.id)}>
                        <p>{doc.title}</p>
                    </div>
                )
            })}
        </div>

        <PopUp
            open={open}
            setOpen={setOpen}
            tittle={title}
            setTitle={setTitle}
            addData={addData}
            handleClose={handleClose}
        />

    </div>
  )
}

export default Docs;