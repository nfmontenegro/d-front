import React, {useEffect, useState} from 'react'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'

import {Button, Input, Spinner} from '../../../components'
import {getUserProfile} from '../../../redux/actions'

function EditProfile() {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const userState = useSelector(state => state.user)

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleChange = event => {
    event.preventDefault()
  }

  useEffect(() => {
    dispatch(getUserProfile())
    const {loading, data} = userState
    setUser(data)
  }, [dispatch])

  return userState.loading ? (
    <div className="flex justify-center mt-8">
      <Spinner width="64" height="64" />
    </div>
  ) : (
    <section className="relative py-16 bg-gray-300">
      <div className="container mx-auto px-16">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://avatars1.githubusercontent.com/u/13742592?s=400&u=23f1a9b586627304907d7102638822bc72883707&v=4"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                    style={{maxWidth: '150px'}}
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
