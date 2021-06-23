import React, { useEffect, useState } from "react"
import styles from "./SpaceBox.module.css"
import SpaceCard from "./SpaceCard"
import { launches, rockets, launchpads } from "../../apis/space-x"

const buildEvents = async () => {
  const launchesArr = await launches()
  const rocketsObj = await rockets()
  const launchpadsOjb = await launchpads()

  const result = launchesArr.map((launch) => {
    const rocket = rocketsObj[launch.rocket]
    const launchpad = launchpadsOjb[launch.launchpad] 
    return {
      ...launch,
      rocket: rocket,
      launchpad: launchpad.name,
      locality: launchpad.locality,
    }
  })

  return result
}

const SpaceBox = (props) => {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const term = props.term

  useEffect(() => {
    const fetchEvents = async () => {
      const eventObjs = await buildEvents()
      setEvents(eventObjs)
    }
    fetchEvents()
  }, [])

  useEffect(() => {
    if (!term) {
      setFilteredEvents(events)
    } else {
      const lowerTerm = term.toLowerCase()
      setFilteredEvents(events.filter(event => {
        return event.rocket.toLowerCase().includes(lowerTerm) || event.name.toLowerCase().includes(lowerTerm) || event.launchpad.toLowerCase().includes(lowerTerm)
      }))
    }
  }, [term, events])

  return (
    <div className={styles.container}>
      <h1>Space exploration</h1>
      {filteredEvents.map((event) => (
        <SpaceCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default SpaceBox
