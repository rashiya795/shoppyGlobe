import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-rose-900 text-rose-200 py-4 mt-20 text-center">
      <p className="text-xs">
        © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
      </p>
    </footer>
  )
}
