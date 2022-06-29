import React , { useState , useRef} from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';

const UploadsComponent = (props) => {
    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
    const [state, setState] = useState({
    title: '',
    description: ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        try {
            const { title, description } = state;
            if (title.trim() !== '' && description.trim() !== '') {
              if (file) {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('title', title);
                formData.append('description', description);
        
                setErrorMsg('');
                await axios.post(`http://localhost:5008/user/upload`, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });
              } else {
                setErrorMsg('Please select a file to add.');
              }
            } else {
              setErrorMsg('Please enter all the field values.');
            }
          } catch (error) {
            error.response && setErrorMsg(error.response.data);
          }
    };

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);
    
        const fileReader = new FileReader();
        fileReader.onload = () => {
        setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png|pdf)$/));
    };

    const updateBorder = (dragState) => {
        if (dragState === 'over') {
          dropRef.current.style.border = '2px solid #000';
        } else if (dragState === 'leave') {
          dropRef.current.style.border = '2px dashed #e9ebeb';
        }
      };
    
    return (
        <div className="row p-4">
        <div className="alert alert-success d-flex align-items-center" role="alert">
            {/* <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> */}
            <div>
              An example success alert with an icon
            </div>
          </div>
     <div className="mt-4">
        <h2>Crud Users</h2>
     </div>
     <div className="col-12 col-lg-4">
         <form onSubmit={handleOnSubmit}>

            {/* <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email address</label>
                <input type="text" className="form-control" name="Email"/>
            </div> */}
            <div className="upload-section" onDragEnter={()=> updateBorder('over')} onDragLeave={()=> updateBorder('Leave')}>
                <Dropzone onDrop={onDrop}>
                    {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                        <input {...getInputProps()} />
                        <p>Drag and drop a file OR click here to select a file</p>
                        {file && (
                        <div>
                            <strong>Selected file:</strong> {file.name}
                        </div>
                        )}
                    </div>
                    )}
                </Dropzone>
                {previewSrc ? (
                    isPreviewAvailable ? (
                    <div className="image-preview ">
                        <img className="preview-image" src={previewSrc} alt="Preview" />
                    </div>
                    ) : (
                    <div className="preview-message">
                        <p>No preview available for this file</p>
                    </div>
                    )
                ) : (
                    <div className="preview-message">
                    <p>Image preview will be shown here after selection</p>
                    </div>
                )}
                </div>
            <button type="submit" className="btn btn-primary">Add user</button>
         </form>
     </div>
     <div className="col-12 col-lg-7">
        <table className="table">
            <thead>
              <tr>
                <th scope='col'>Email</th>
                <th scope='col'>Lastname</th>
                <th scope='col'>Firstname</th>
                <th scope='col'>Age</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <th>mansouri@live.fr</th>
                    <td>mansouri</td>
                    <td>youssef</td>
                    <td>29</td>
                    <td className="gap__actions">
                     
                     <span className="badge bg-info"><a href="/id" className="text-white"><i className="fas fa-edit"></i></a></span>
                     
                      <span className="badge bg-danger" onClick=""><i
                        className="fas fa-trash-alt"
                      ></i></span>
                    </td>
                  </tr>
            </tbody>
        </table>    
     </div>
    </div>
)

}

export default UploadsComponent 