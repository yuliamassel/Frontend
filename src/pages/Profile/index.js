import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import styles from './profile.module.css'
import ProfImg from '../../assets/img/prodPic.svg'
import Sidebar from '../../components/Sidebar';

const Profile = () => {
  return (
    <main className={`containder-fluid bg-white ${styles.con} d-flex flex-column`}>
      <Navbar/>
      <div className="d-flex w-100 flex-fill">
          <Sidebar/>
          {/* <div className={`w-25 sidebar`}>
                  sidebar
          </div> */}
          <div className={`w-75 bg-light profileBox pt-3`}>
              <div className={`${styles.profilebox} mt-5 ms-5 p-3 bg-white`}>
                  <div className={`profilebox-wrapper h-100`}>
                    <h6 className="fw-bold">My Profile
                    <br />
                    <span className="text-secondary fw-light mt-2">Manage your profile information</span></h6>
                    <hr className='mt-3'/>
                    <div className="d-flex profile-forms-wrapper">
                        <div className="w-75">
                        <div className="w-100 d-flex justify-content-between px-5">
                                <label className="input-name mt-2" htmlFor="Name">
                                    Name
                                </label>
                                <Input
                                    name="name"
                                    className={`${styles.inputForm}`}
                                    type="text"
                                    id="Name"
                                    placeholder="Nanang Ismail"
                                />
                        </div>
                        <div className="w-100 d-flex justify-content-between mt-3 px-5">
                                <label className="input-name mt-2" htmlFor="Name">
                                    Email
                                </label>
                                <Input
                                    name="email"
                                    className={`${styles.inputForm}`}
                                    type="email"
                                    id="email"
                                    placeholder="nangis@gmail.com"
                                />
                        </div>

                        <div className="w-100 d-flex justify-content-between mt-3 px-5">
                                <label className="input-name mt-2" htmlFor="Name">
                                    Phone number
                                </label>
                                <Input
                                    name="phone_number"
                                    className={`${styles.inputForm}`}
                                    type="number"
                                    id="phone_number"
                                    placeholder="0812345678900"
                                />
                        </div>

                        <div className="w-100 d-flex justify-content-between mt-3 px-5">
                                <label className="input-name mt-2" htmlFor="Name">
                                    Gender
                                </label>
                                <div className='d-flex mt-2 ps-5'>
                                <Input 
                                    className={`${styles.inputForm1} mt-1`}
                                    name="gender"
                                    type="radio"
                                    value="male"
                                    id="gender"
                                /> Male
                                </div>
                                <div className='d-flex mt-2'>
                                <Input
                                    className={`${styles.inputForm1} mt-1`}
                                    name="gender"
                                    type="radio"
                                    value="female"
                                    id="gender"
                                /> Female
                                </div>
                        </div>
                        <div className="w-100 d-flex justify-content-between mt-3 px-5">
                            <label className="input-name mt-2" htmlFor="Name">
                                Date of birth
                            </label>
                            <Input
                                name="DOB"
                                className={`${styles.inputForm}`}
                                type="text"
                                id="DOB"
                                placeholder="31 September 1988"
                            />
                </div>
                        <Button 
                            className={`${styles.lowerButtons} ${styles.redButton} bg-primary ms-5 mt-3`}>
                            Save
                            </Button>


                        </div>
                        <div className="w-25 profpic-setting">
                            <div className={`${styles.wrapper} w-100 d-flex flex-column justify-content-center`}>
                                <img src={ProfImg} className={`${styles.profImg}`} alt="" />
                                <Button
                                    className={`${styles.lowerButtons1} ${styles.redButton1} bg-transparent mt-3`}>
                                    Select Image
                                    </Button>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      </main>    
  );
};

export default Profile;