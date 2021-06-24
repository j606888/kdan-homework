const HOST = "https://api.spacexdata.com"

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
  ).then((rockets) => rockets.reduce((obj, cur) => ({ ...obj, [cur.id]: cur.name}), {}))
}

exports.launchpads = () => {
  return fetch(`${HOST}/v4/launchpads`).then((res) =>
    res.json()
  ).then(pads => pads.reduce((obj, cur) => ({ ...obj, [cur.id]: { name: cur.name, locality: cur.locality}}), {}))
}
