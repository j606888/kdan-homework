import React, { useEffect, useState } from "react"
import styles from "./SpaceBox.module.css"
import SpaceCard from "./SpaceCard"
import { launches, rockets, launchpads } from "../../apis/space-x"

const buildEvents = async () => {
  const [launchesArr, rocketsObj, launchpadsObj] = await Promise.all([launches(), rockets(), launchpads()])

  const result = launchesArr.map((launch) => {
    const rocket = rocketsObj[launch.rocket]
    const launchpad = launchpadsObj[launch.launchpad]
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
    buildEvents().then((eventObjs) => setEvents(eventObjs))
  }, [])

  useEffect(() => {
    if (!term) setFilteredEvents(events)
    else {
      setFilteredEvents(
        events.filter((event) =>
          (
            // 這裏好像也有更好的寫法但想不太到 QQ
            event.rocket.toLowerCase().includes(term) ||
            event.name.toLowerCase().includes(term) ||
            event.launchpad.toLowerCase().includes(term)
          )
        )
      )
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
