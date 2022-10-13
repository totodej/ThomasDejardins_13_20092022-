const userProfile = async (token) => {
  if (token) {
    token = token.replace(/"/g, "");
  }

  return fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => {
      return response;
    });
};

export default userProfile;
