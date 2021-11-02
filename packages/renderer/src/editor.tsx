import React, { useCallback, useEffect } from 'react'
import { useCodeMirror } from './use-codemirror'
import './editor.css'

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
}

export const Editor: React.FC<Props> = ({ initialDoc, onChange }) => {
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return <div className="editor-wrapper" ref={refContainer} />
}
