import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [file, setFile] = useState(null)
  const [formData, setFormData] = useState(null)
  const [PublishError, setPublishError] = useState(null)
  const navigate = useNavigate();
  console.log(formData)

  const handleUploadImage = async () => {
    try {
      if (!file) {
        return
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (!res.ok) {
        setPublishError(data.message)
        return
      }
      if (res.ok) {
        setPublishError(null)
        navigate(`/post/${data.slug}`)
      }
    } catch (error) {
      setPublishError('Something went wrong')
    }
  }
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a Post</h1>
      <form action='' className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div
          className='flex flex-col gap-4 sm:flex-row 
        justify-between'
        >
          <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />
          <Select
            onChange={e =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value='uncategorized'>Select a Category </option>
            <option value='javascript'>JavaScript</option>
            <option value='reactjs'>React Js</option>
            <option value='nextjs'>Next Js</option>
          </Select>
        </div>
        <div
          className='flex gap-4 items-center justify-between
        border-4 border-teal-500 border-dotted p-3'
        >
          <FileInput
            type='file'
            accept='image/*'
            onChange={e => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
            onClick={handleUploadImage}
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
          onChange={value => {
            setFormData({ ...formData, content: value })
          }}
        />
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>
        {PublishError && <Alert className='mt-5' color='failure'>{PublishError}</Alert>}
      </form>
    </div>
  )
}

export default CreatePost
