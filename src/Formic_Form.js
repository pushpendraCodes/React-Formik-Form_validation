import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from "yup"
const Formic_Form = () => {

    const validation = useFormik({
        validationSchema: Yup.object().shape({
            department: Yup.string().required("this feild is required"),
            location: Yup.string().required("this feild is required"),
            atHome: Yup.string().required("this feild is required"),
            wfh: Yup.mixed().required("this feild is required"),
            startDate: Yup.string().required("this feild is required"),
            endDate: Yup.string().required("this feild is required"),
            comment: Yup.string().required("this feild is required"),
            verify: Yup.string().required("this feild is required"),

        })
    ,
        initialValues: {
            department: '',
            location: '',
            atHome: '',
            startDate: '',
            wfh:'',
            endDate: '',
            comment: '',
            verify: ''


        },
        onSubmit: (value) => {
console.log(value)
}
})


const isValidation = (name) => !!(validation.touched[name] && validation.errors[name]);
const formiKMessage = (name) => {
    return isValidation(name) && <p className='text-danger '>{validation.errors[name]}</p>
}



return (

    <div className='container'>
        <div className="row">
            <h1 className=' my-4 text-center text-decoration-underline text-danger'>Formic_Form</h1>
            <form onSubmit={validation.handleSubmit}>
                <div className="col-md-6">

                    <div className='flex my-1'>
                        <label style={{ display: 'flex' }} htmlFor="">Department*</label>
                        <input
                            name='department'
                            value={validation.values.department}
                            onChange={validation.handleChange}

                            placeholder='Creative' type="text" />
                    </div>
                    {formiKMessage("department")}
                    <div className='flex my-3'>
                        <label style={{ display: 'flex' }} htmlFor="">Location Of Work*</label>
                        <input
                            name='location'
                            value={validation.values.location}
                            onChange={validation.handleChange}
                            placeholder='location of Work' type="text" />
                    </div>
                    {formiKMessage("location")}
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="exampleRadios1"
                            value="  Internet Availibility at Home"
                            onChange={validation.handleChange}
                            name="atHome"

                            checked={validation.values.atHome} />
                        <label class="form-check-label" for="exampleRadios1">
                            Internet Availibility at Home
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            value="    Electricity Backup at Home"
                            onChange={validation.handleChange}
                            checke={validation.values.atHome}
                            name="atHome"
                            class="form-check-input" type="radio" id="exampleRadios2" />
                        <label class="form-check-label" for="exampleRadios2">
                            Electricity Backup at Home
                        </label>
                    </div>
                    {formiKMessage("atHome")}

                    <div className='flex my-3'>
                        <label style={{ display: 'flex' }} htmlFor="">Duration Of Work From Home*</label>
                        <select name='wfh' value={validation.values.wfh} onChange={validation.handleChange}    >
                            <option >Select</option>
                            <option value="1Month">1Month</option>
                            <option value="2Month">2Month</option>
                            <option value="3Month">3Month</option>
                            <option value="4Month">4Month</option>
                        </select>

                    </div>
                    {formiKMessage("wfh")}
                </div>
                <div className="col-md-6">

                    <div className='flex my-3'>
                        <label style={{ display: 'flex' }} htmlFor="">Start Date*</label>
                        <input
                        name='startDate'
                        value={validation.values.startDate}
                        onChange={validation.handleChange}
                         placeholder='Start Date' type="date" />
                    </div>
                    {formiKMessage("startDate")}
                    <div className='flex my-3'>
                        <label style={{ display: 'flex' }} htmlFor="">  End Date*</label>
                        <input
                         name='endDate'
                        value={validation.values.endDate}
                        onChange={validation.handleChange} placeholder='End date' type="date" />
                    </div>
                    {formiKMessage("endDate")}
                    <div className='flex my-3'>
                        <label style={{ display: 'flex' }} htmlFor="">  Comment*</label>
                        <textarea
                         name='comment'
                        value={validation.values.comment}
                        onChange={validation.handleChange}
                         placeholder='Add Your Comment Here' type="text" />
                    </div>
                    {formiKMessage("comment")}
                    <div className='d-flex my-3'>
                        <input 
                         name='verify'
                        value={validation.values.verify}
                        onChange={validation.handleChange}
                        className='mx-2' type="checkbox" />
                        <label style={{ display: 'flex' }} htmlFor="">I here by certify that all answer to question appearing on this form and document submmitted with the helathCare Provider .Photocopy Of this Aouthrization shall be as the orginal .*</label>

                    </div>
                    {formiKMessage("verify")}
                </div>
                <div>
                    <button className='btn btn-danger my-4'>Submit</button>
                </div>
            </form>
        </div>

    </div>
)
}

export default Formic_Form

