const express = require('express');
const path = require('path');
const app = express();
const handle = handlebars('express-handlebars');

app.get('/', (request, response) => {
  return response.send('OK');
});
app.listen(5000, () => {
  console.log('App is listening on port 5000');
});

app.get('/index', (request, response) => {
    response.render('index', {
      subject: 'Handlebars template engine',
      name: 'To Dont List',
      link: ''
    });
  });

  // Gets all members
router.get("/", (req, res) => res.json(members));

// Get Single Member
router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Create Member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    username: req.body.username,
    status: "active",
  };

  if (!newMember.name || !newMember.username) {
    return res.status(400).json({ msg: "Please include a name and username" });
  }

  members.push(newMember);
  //res.json(members);
  res.redirect('/');
});

// Update Member
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.username = updMember.username
          ? updMember.username
          : member.username;

        res.json({ msg: "Member was updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Delete Member
router.delete("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter(member => member.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;