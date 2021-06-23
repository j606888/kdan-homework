const HOST = "https://api.spacexdata.co"

exports.launches = () => {
  return fetch(`${HOST}/v4/launches/upcoming`).then((res) =>
    res.json()
  ).then(launches => {
    return launches.map((launch) => ({
      id: launch.id,
      image_url: launch.links.patch.small,
      rocket: launch.rocket,
      launchpad: launch.launchpad,
      name: launch.name,
      date: launch.date_local
    }))
  })
}

exports.rockets = () => {
  return fetch(`${HOST}/v4/rockets`).then((res) =>
    res.json()
  ).then((rockets) => {
    const result = {}
    rockets.forEach(rocket => result[rocket.id] = rocket.name)

    return result
  })
}

exports.launchpads = () => {
  return fetch(`${HOST}/v4/launchpads`).then((res) =>
    res.json()
  ).then(pads => {
    const result = {}
    pads.forEach(pad => result[pad.id] = { name: pad.name, locality: pad.locality})
    return result
  })
}
