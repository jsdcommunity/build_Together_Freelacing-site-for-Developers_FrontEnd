import { Avatar, Badge, Button, Chip, Grid, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AddIcon from '@mui/icons-material/Add';


const userDetails = {
    profilePic : "",
    fullname: "",
    email: "",
    profileDescription: "",
    phone: "",
    github: "",
    linkedin: "",
    instagram: "",
    skills: [] ,
    password: "",
    confirmPassword: ""
}


function DeveloperProfile() {

    const [userData, setuserData] = useState(userDetails)
    

    const handleInputChange = e => {

        const name = e.target.name ;
        const value = e.target.value ;
        setuserData({ ...userData,[name]:value }) ;

    }

    const handleResetButton = () => {
            setuserData({...userData,...userDetails})
    }

    const profilePicHandler = e => {

        const pic = URL.createObjectURL(e.target.files[0]);
        setuserData({ ...userData,"profilePic":pic }) ;
        
    }


    const handleDelete = (item) => {

        const skillSet = userData.skills
        setuserData({...userData, "skills": skillSet.filter((data) => data !== item ) })
    
    };
    const handleAddSkills = () =>{
        const skillSet = userData.skills
        let newSkill = prompt("Add your Skills")
        if(newSkill!==""){
            setuserData({...userData,"skills" : [...skillSet,newSkill ]})
        }
    }
    return (
        <div>
           <Typography variant="h6" sx={{fontWeight:"500",my:1}} >Edit Profile</Typography>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                sx={{maxWidth:"600px",mx:"auto",pr:3}}
            >
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <label htmlFor="icon-button-file">
                        <input name="profilePic" style={{display:"none"}} onChange={profilePicHandler} accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCameraIcon />
                        </IconButton>
                    </label>
                    }
                    sx={{cursor:"pointer"}}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src={userData.profilePic}
                        sx={{ width: 100, height: 100 }}
                    />
                </Badge>
                
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={6}>
                <TextField fullWidth value={userData.fullname} placeholder="Fullname" name="fullname"  onChange={handleInputChange} />

                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth  value={userData.email} placeholder="Email" name="email" onChange={handleInputChange} />

                </Grid>
                <Grid item xs={12}>
                <TextField fullWidth  value={userData.profileDescription} name="profileDescription" placeholder="Profile description" multiline maxRows={4} onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth  value={userData.phone} name="phone" placeholder="Phone no"  onChange={handleInputChange} />

                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth value={userData.github}  name="github" placeholder="Github"  onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth value={userData.linkedin}  name="linkedin" placeholder="Linkedin"  onChange={handleInputChange} />

                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth value={userData.instagram}  placeholder="Instagram" name="instagram"  onChange={handleInputChange} />
                </Grid>
                
                <Grid item xs={12}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography sx={{fontWeight:"500"}}>Skills :</Typography>
                            <Paper elevation={2} sx={{p:1}}>
                            {
                                userData.skills.map((item) => {
                                    return  <Chip
                                                label={item}
                                                variant="outlined"
                                                color="primary"
                                                onDelete={() => {handleDelete(item)}}
                                                sx={{mr:1}}
                                            />
                                })
                            }
                                <Chip
                                    icon={<AddIcon />}
                                    label="Add"
                                    color="success"
                                    variant="outlined"
                                    sx={{cursor:"pointer"}}
                                    onClick={handleAddSkills}
                                />
                            </Paper>
                        
                        
                        </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{fontWeight:"500"}}>Do you want to change your password ?</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField value={userData.password}  name="password" fullWidth placeholder="Type your password" type="password"  onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField  value={userData.confirmPassword}  name="confirmPassword" fullWidth placeholder="Confirm password"  type="password" required  onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={12}>
                     <Button onClick={() => console.log(userData)} color="success" variant="contained">Save changes</Button>
                     <Button onClick={handleResetButton} sx={{mx:1}} color="error" variant="contained">reset</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeveloperProfile
