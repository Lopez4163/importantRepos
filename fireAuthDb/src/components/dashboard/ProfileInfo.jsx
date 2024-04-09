import React, { useState } from "react"

const ProfileInfo = () => {
  const [profileImage, setProfileImage] = useState("")
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [beltGrade, setBeltGrade] = useState("")

  const [editBtn, setEditBtn] = useState(false)
  return (
    <div>
      {!editBtn && (
        <div>
          <div>
            <img alt="image here" />
            <h3>Name Here</h3>
            <h3>Member Since Date</h3>
            <button
              onClick={() => {
                setEditBtn(true)
              }}
            >
              Edit
            </button>
          </div>
          <div>
            <h2>Personal Details</h2>
            <h3>Phone Number: 777-777-7777</h3>
            <img alt="belt img here" />
          </div>
        </div>
      )}
      {editBtn && (
        <div>
          <div>
            <input
              placeholder="img here"
              value={profileImage}
              onChange={e => {
                setProfileImage(e.target.value)
              }}
            />
            <button>Add Image</button>
            <input
              placeholder="name here"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
            <button
              onClick={() => {
                setEditBtn(false)
                console.log("Edit")
              }}
            >
              Save Changes
            </button>
          </div>
          <div>
            <h2>Personal Details</h2>
            <input
              placeholder="phone number"
              value={phoneNumber}
              onChange={e => {
                setPhoneNumber(e.target.value)
              }}
            />
            <input
              placeholder="belt img"
              value={beltGrade}
              onChange={e => {
                setBeltGrade(e.target.value)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileInfo
