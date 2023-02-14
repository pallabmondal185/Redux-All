import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FetchCompany } from '../../../redux/FeaturCompanySlice'
import img11 from '../../../assets/imags/ccc.png'
import {featurCompant} from "../../../redux/Path"

export const FeaturCompany = () => {
    const dispatch = useDispatch();
    const { featur_company_data } = useSelector((state) => state?.FeaturCompanySlice)
    console.log(featur_company_data);
    
    useEffect(() => {
        dispatch(FetchCompany())
    }, [dispatch])

    return (
        <>
            <section id="Job-Category">
                <div className="container">
                    <h3 className="text-center">Feature Company</h3>
                    <div className="vertical-space-30"></div>
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="vertical-space-60"> </div>
                    <div className="row">
                        {featur_company_data?.data?.map((i) => {
                            return (
                                <div className="col-lg-3 col-md-6 max-width-50">
                                    <div className="box background-color-white-light">
                                        <div className="circle">
                                        <img src={img11} alt="" height="37px" />
                                        </div>
                                        <h6>company - {i?.company_name}</h6>
                                        <h6>CEO - {i?.ceo_name}</h6>
                                        <h6>Location - {i?.location}</h6>
                                        <a href="#" className="button job_post" data-hover="Company Details" data-active="I'M ACTIVE"><span>Company Details</span></a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
                <div className="vertical-space-85"></div>
            </section>
        </>
    )
}