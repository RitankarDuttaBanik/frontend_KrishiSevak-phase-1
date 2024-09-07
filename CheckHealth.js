import  React ,{useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { predictPlantDisease } from './api';


const CheckHealth =() => {
    const [file,setFile] = useState(null);
    const [lang,setLang] = useState('en');
    const [result,setResult] = useState(null);

    const onDrop =acceptedFile => 
        setFile(acceptedFile[0]);

    const{ getRootProps,getInputsProps } = useDropzone({ onDrop});

    const handleSubmit = async() => {
        if(!file){
            alert("plz upload a file");
            return;
        }
        const res = await
            predictPlantDisease(file,lang);
                setResult(res.data);
    };
    return(
        <div className='check-health-page'>
        <h1>Check your plant health</h1>
        <div {...getInputsProps()}
        className='dropbox'>
        <input {...getInputsProps()} />
        <p>Drop your crop image here</p>

        </div>
        <select onChange = {(e)=>
            setLang(e.target.value)}>
            <option value ='en'>English</option>
            <option value ='hi'>hindi</option>
            <option value ='bn'>bengali</option> 
            /* more languagges */
            </select>
            
            <button onClick ={handleSubmit}>submit</button>
            
            {result && (
                <div className='result'>
                <h2>Analysis result</h2>
                <p>Class:{result.class}</p>
                <p>Confidence:{result.confidence}%</p>
                <p>Disease: {result.disease_name}%</p>
                <p>Cure:{result.cure}</p>
                </div>
            )}
            </div>


        );
        }    
        

        
        
        
       
    