import React, { useEffect, useState } from 'react';
import './ResumeTemplate.css';
import ResumeTemplate from './ResumeTemplate';


  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
function InformaionTemplate() {
    // Personal fields
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [LinkidIn, setLinkidIn] = useState('');  //optional
    const [Portfolio, setPortfolio] = useState('');//optional

    // Profile image
    const [image, setImage] = useState('');
    const [isImage, setIsImage] = useState(false);
    const [showCover, setShowCover] = useState(false);
    
    //Summary
    const [Summary, setSummary] = useState('');

    //Education
    const [Degree,setDegree]=useState('');
    const [Uni,setUni]=useState('');
    const [EduLoc,setEduLoc]=useState('');
    const [GradYear,setGradYear]=useState('');
    const [GradMonth,setGradMonth]=useState('');
    const [AcademicHonors,setAcademicHonors]=useState('');  //optional

    //Work Experience
    const [Company,setCompany]=useState('');
    const [JobTitle,setJobTitle]=useState('');
    const [Achievement,setAchievement]=useState('');  //optional
    const [JobLoc,setJobLoc]=useState('');
    const [Desc,setDesc]=useState(''); //optional


    //skills
    const [Skill,setSkill]=useState('');


    //Hobbies
    const [Hobby,setHobby]=useState('');

    
    

    var idList = ['fname', 'lname','phone', 'email','address',
      'Summary','Degree','Uni','EduLoc',
      'GradYear','GradMonth','Company','JobTitle',
      'JobLoc','Skill','Hobby'];

    useEffect(() => {
        sessionStorage.setItem("reloading", "true");
    }, []);
    
    // Ensure that form is cleared on page refresh
    window.onload = function() {
        const reloading = sessionStorage.getItem("reloading");
        if (reloading) {
            sessionStorage.removeItem("reloading");
            clearAll();
        }
    }

    // Additional validations before submitting the form
    const checkValidity = () => {
        const validity = idList.map((item, index) => {
            if (!document.getElementById(item).validity.valid || !isImage) {
                return false;
            }
            return true;
        });
        return validity.some((item, index) => {
            return item === false;
        });
    }

    const loadFile = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        setImage(base64String);
        setIsImage(true);
        };
        reader.readAsDataURL(file);
    }

    const expand = (id) => {
        const coll = document.getElementById(id);
        coll.classList.toggle("active");
            let content = coll.nextElementSibling;
            if (content.style.display === "flex") {
                coll.lastChild.className="fas fa-caret-down"
                content.style.display = "none";
            } else {
                content.style.display = "flex";
                coll.lastChild.className="fas fa-caret-up"
                content.style.marginBottom = "20px";
            }
    }

    const PersonalField = () => {
        return (
            <>
                <div className="form-group">
                    <input type="text" name="fname" id="fname" placeholder="First Name" value={fname} onChange={(e) => {setFname(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="lname" id="lname" placeholder="Last Name" value={lname} onChange={(e) => {setLname(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="tel" value={phone}onChange={(e) => {setPhone(e.target.value)}} name="telephone" id="phone" placeholder="Phone Number (EX: 01226963933)" pattern="[0-9]{11}" required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} name="email" id="email" placeholder="Email (EX: emailid@something.com)"required />  
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" value={address} onChange={(e) => {setAddress(e.target.value)}} name="address" id="address" placeholder="Address" required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="url" value={LinkidIn} onChange={(e) => {setLinkidIn(e.target.value)}} name="LinkidIn" id="LinkidIn" placeholder="LinkidIn link" />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>(optional)</span>
                </div>
                <div className="form-group">
                    <input type="url" value={Portfolio} onChange={(e) => {setPortfolio(e.target.value)}} name="Portfolio" id="Portfolio" placeholder="Portfolio link" />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>(optional)</span>
                </div>
            </>
        );
    }

    const SummaryField = () => {
        return (
            <>
                <div className="form-group">
                    <textarea rows='3' cols="90" type="text" name="Summary" id="Summary" placeholder="Brief Summary about your professional background, skills, and career goals." value={Summary} onChange={(e) => {setSummary(e.target.value)}} required>
                    </textarea>
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
            </>
        );
    }

    const EducationField = () => {
        return (
            <>
                <div className="form-group">
                    <input type="text" name="Degree" id="Degree" placeholder="Degree" value={Degree} onChange={(e) => {setDegree(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="Uni" id="Uni" placeholder="Educational institution" value={Uni} onChange={(e) => {setUni(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="EduLoc" id="EduLoc" placeholder="Educational institution location" value={EduLoc} onChange={(e) => {setEduLoc(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="number" name="GradMonth" id="GradMonth" placeholder="Graduation Month" value={GradMonth} onChange={(e) => {setGradMonth(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="number" name="GradYear" id="GradYear" placeholder="Graduation Year" value={GradYear} onChange={(e) => {setGradYear(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="text"  name="AcademicHonors" id="AcademicHonors" placeholder="Academic honors" value={AcademicHonors} onChange={(e) => {setAcademicHonors(e.target.value)}} />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>(optional)</span>
                </div>
            </>
        );
    }

    const WorkExpField = () => {
        return (
            <>
                <div className="form-group">
                    <input type="text" name="Company" id="Company" placeholder="Company name" value={Company} onChange={(e) => {setCompany(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="JobTitle" id="JobTitle" placeholder="Job Title" value={JobTitle} onChange={(e) => {setJobTitle(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="Achievement" id="Achievement" placeholder="Achievement" value={Achievement} onChange={(e) => {setAchievement(e.target.value)}} />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="JobLoc" id="JobLoc" placeholder="Company location" value={JobLoc} onChange={(e) => {setJobLoc(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
                <div className="form-group">
                    <textarea rows='3' cols="90" type="text" name="Desc" id="Desc" placeholder="Brief description about your previous job." value={Desc} onChange={(e) => {setDesc(e.target.value)}} required>
                    </textarea>
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
            </>
        );
    }

    const SkillsField = () => {
        return (
            <>
                <div className="form-group">
                    <input type="text" name="Skill" id="Skill" placeholder="Skill" value={Skill} onChange={(e) => {setSkill(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
            </>
        );
    }

    const HobbiesField = () => {
        return (
            <>
                <div className="form-group">
                    <input type="text" name="Hobby" id="Hobby" placeholder="Hobby" value={Hobby} onChange={(e) => {setHobby(e.target.value)}} required />
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                </div>
            </>
        );
    }

    const generate = async (e) => {
        const coll = document.getElementsByClassName("collapsible");
        
        for (let i = 0; i < coll.length; i++) {
            coll[i].nextElementSibling.style.display = "flex";
            coll[i].nextElementSibling.style.marginBottom = "20px";
        }
        const isInvalid =false; //await checkValidity();

        if (!isInvalid) {
            const formData = [{
                fname,
                lname,
                phone,
                email,
                address,
                image,
                LinkidIn,
                Portfolio,
                Summary,
                Degree,
                Uni,
                EduLoc,
                GradYear,
                GradMonth,
                AcademicHonors,
                Company,
                JobTitle,
                Achievement,
                JobLoc,
                Desc,
                Skill,
                Hobby
            }];
            await localStorage.setItem('formData', JSON.stringify(formData));
            setShowCover(true);

        } else {
            alert("Please fill the form correctly (Fill all the required fields, and profile picture)");
        }
    }
    
    const clearAll = () => {
        idList = ['fname', 'lname','phone', 'email','address',
        'LinkidIn','Portoflio','Summary','Degree','Uni','EduLoc',
        'GradYear','GradMonth','AcademicHonors','Company','JobTitle',
        'Achievement','JobLoc','Desc','Skill','Hobby'];

        for (let i = 1; i <= 3; i++) {
            if (document.getElementsByName(`fromMonth${i}`)) {
                document.getElementsByName(`fromMonth${i}`).value = ''
            }
            if (document.getElementsByName(`startMonth${i}`)) {
                document.getElementsByName(`startMonth${i}`).value = ''
            }
            if (document.getElementsByName(`toMonth${i}`)) {
                document.getElementsByName(`toMonth${i}`).value = ''
            }
            if (document.getElementsByName(`endMonth${i}`)) {
                document.getElementsByName(`endMonth${i}`).value = ''
            }
        }

       

        setIsImage(false);
        setImage('');
        setShowCover(false);

        localStorage.setItem('formData', '');
        

        // Personal Details
        setFname('');
        setLname('');
        setPhone('');
        setEmail('');
        setAddress('');
        setLinkidIn('');
        setPortfolio('');

        //Summary
        setSummary('');

        //Education
        setDegree('');
        setUni('');
        setEduLoc('');
        setGradYear('');
        setGradMonth('');
        setAcademicHonors(''); 

        //Work Experience
        setCompany('');
        setJobTitle('');
        setAchievement(''); 
        setJobLoc('');
        setDesc('');

        //skills
        setSkill('');


        //Hobbies
        setHobby('');



        if (document.getElementById("img")) {
            document.getElementById("img").value = "";
        }
    }

    return (
        <div className="wrapper">
            {!showCover ? 
            <div className="ResumeForm">
                <h2 style={{color: 'darkslategray'}}>Your Resume</h2>
                <form className="formwrap" id="form">
                    <button type="button" className="collapsible" id="personal" onClick={() => expand("personal")}> Personal Details</button>
                    <div className="content">
                        {PersonalField()}
                        <label htmlFor="img" style={{color: 'red', alignSelf: 'baseline', marginBottom: '10px',fontSize:'20px'}}> Select Personal Image To Upload</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={(event) => loadFile(event)} style={{color: 'white', background: '#4077ad', marginBottom: '30px',width:'850px'}}></input>
                    <span style={{color: 'red', alignSelf: 'baseline'}}>*</span>
                    </div>
                    <button type="button" className="collapsible" id="Summary&Education" onClick={() => expand("Summary&Education")}> Summary and Education </button>
                    <div className="content">
                        {SummaryField()}
                        {EducationField()}
                    </div>
                    <button type="button" className="collapsible" id="WorkExp" onClick={() => expand("WorkExp")}> Work Experience Details</button>
                    <div className="content">
                        {WorkExpField()}
                    </div>
                    <button type="button" className="collapsible" id="Skill" onClick={() => expand("Skill")}> Skills</button>
                    <div className="content">
                        {SkillsField()}
                    </div>
                    <button type="button" className="collapsible" id="Hobby" onClick={() => expand("Hobby")}> Hobbies</button>
                    <div className="content">
                        {HobbiesField()}
                    </div>
                    <div className="submitWrap">
                        <button type="submit" className="submit" id="submit" onClick={(e) => generate(e)}>Generate</button>
                        <button type="reset" className="submit" id="reset" onClick={() => clearAll()}>Reset</button>
                    </div>
                </form>
            </div> : <ResumeTemplate generateNew={clearAll} />}
        </div>
    );
}

export default InformaionTemplate;