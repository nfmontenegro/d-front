import {useFormik} from "formik"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import * as Yup from "yup"

import {getUserProfile} from "../../../redux/actions"
import {Button, Input, Spinner} from "../../../components"

function EditProfile() {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const userState = useSelector(state => state.user)

  const EditProfileSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
  })

  const formik = useFormik({
    initialValues: userState,
    validationSchema: EditProfileSchema
    // onSubmit: async values => await dispatch(editProfileaction(values))
  })

  const {handleSubmit, handleChange, values, isSubmitting} = formik

  useEffect(() => {
    dispatch(getUserProfile())
    const {data} = userState
    setUser(data)
  }, [dispatch, userState])

  console.log("@@ values:", values)

  return userState.loading ? (
    <div className="flex justify-center">
      <Spinner width="64" height="64" />
    </div>
  ) : (
    <section className="relative py-10 bg-gray-300">
      <div className="container mx-auto px-10">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://avatars1.githubusercontent.com/u/13742592?s=400&u=23f1a9b586627304907d7102638822bc72883707&v=4"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                    style={{maxWidth: "150px"}}
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-24">
              <div className="min-h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                  <form className=" max-w-sm mt-8" onSubmit={handleSubmit}>
                    <Input type="email" label="Email" name="email" onChange={handleChange} value={user.email} />
                    <Input type="text" label="Password" name="password" onChange={handleChange} value={user.password} />
                    <div className="mt-6">
                      <Button value="Edit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditProfile
