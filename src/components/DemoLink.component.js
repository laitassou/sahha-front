import React, { Fragment } from 'react'

export default function DemoLink({ fileName, children }) {
  return (
    <Fragment>
      <div style={{ marginBottom: 10 }}>
      </div>
      {children ? <div style={{ marginBottom: 10 }}>{children}</div> : null}
    </Fragment>
  )
}