import React from 'react';
import { Fragment , useState} from 'react';
import axios from 'axios';

const UploadFile = () => {

    const [file,setFile] = useState('')
    const [filename,setFilename] = useState('Choisir un fichier')
    const [uploadedFile,setUploadedFile] = useState({})

    const onChange = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const onClick = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',file)

        try {
            const res = await axios.post('/upload' , formData , {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            })

            const { fileName , filePath } = res.data 

            setUploadedFile({ fileName , filePath})
        } catch (err) {
            if (err.response.status === 500 ){
                console.log('il y a un probleme de serveur ')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }

    return(
        <Fragment>
            <div style={{margin:"10px"}}>
                <div className="custom-file" >
                    
                    <label className='custom-file-label' htmlFor='customFile' style={{ width:"30%"}}  >
                        {filename}
                        <input type='file' className='custom-file-input' id='customFile' onChange={onChange} />
                    </label>
                </div>
                <input type="button" value="Rejoindre" className='btn btn-primary' onClick={onClick}/>
            </div>
        </Fragment>
    )
}

export default UploadFile