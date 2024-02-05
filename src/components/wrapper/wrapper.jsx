import React from 'react'

function wrapper({ sidebar, content }) {
  return (
    <div className="wrapper">
            {sidebar}
            {content}
        </div>
  )
}

export default wrapper