import React, { useState, useCallback } from 'react'
import { Editor } from './editor'
import './app.css'
import { Preview } from './preview'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
