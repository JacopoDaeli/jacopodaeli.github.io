'use client'

import { useState } from 'react'
import { experience } from '@/data/resume'

const INITIAL_COUNT = 3

export default function ExperienceList() {
  const [showAll, setShowAll] = useState(false)
  const hiddenCount = experience.length - INITIAL_COUNT
  const visible = showAll ? experience : experience.slice(0, INITIAL_COUNT)

  return (
    <>
      <ol className="space-y-10">
        {visible.map((company) => (
          <li key={company.name}>
            <div className="font-mono text-sm text-gray-500 dark:text-gray-400">
              {company.span}
            </div>
            <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
              {company.name}
            </h3>
            <ul className="mt-3 space-y-5">
              {company.roles.map((role) => (
                <li key={role.title}>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {role.title}
                    </span>
                    {company.roles.length > 1 && (
                      <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                        · {role.period}
                      </span>
                    )}
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      · {role.location}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">{role.impact}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((s) => !s)}
          aria-expanded={showAll}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-8 text-sm font-medium"
        >
          {showAll ? 'Show less' : `Show ${hiddenCount} more`} &rarr;
        </button>
      )}
    </>
  )
}
