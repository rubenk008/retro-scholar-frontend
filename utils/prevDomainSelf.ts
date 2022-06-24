const prevDomainSelf = (currentHostname) => {
  const documentReferer = document.referrer;
  let url = { hostname: "" };
  let hostname = "";

  if (documentReferer.length > 0) {
    url = new URL(documentReferer);
    hostname = url.hostname;
  }

  if (hostname === currentHostname) {
    return true;
  }

  if (hostname !== currentHostname || hostname === "") {
    return false;
  }
};

export default prevDomainSelf;
