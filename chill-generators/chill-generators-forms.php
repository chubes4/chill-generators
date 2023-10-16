<div id="generated-output"></div>
<?php
  if ($shortcode_used == 'rapper_name_generator') {
?>
<form method="post" class="chill-generators-form" id="rapper-name-form">
  Nickname: <input type="text" name="input"><br>
  Rapper Style: 
  <select name="style">
    <option value="old school">Old School</option>
    <option value="trap">Trap</option>
    <option value="grime">Grime</option>
    <option value="conscious">Conscious</option>
    <option value="random">Random</option>
  </select><br>
  Gender: 
  <select name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="non-binary">Non-Binary</option>
  </select><br>
  Number of words: 
  <select name="number_of_words">
    <option value="2">2</option>
    <option value="3">3</option>
  </select><br>
  <input class="chill-generators-submit" type="submit" value="Generate Rapper Name">
</form>
<?php
} elseif ($shortcode_used == 'band_name_generator') {
?>
<form method="post" class="chill-generators-form" id="band-name-form">
  Your Added Word(s): <input type="text" name="input"><br>
  Genre: 
  <select name="genre">
    <option value="rock">Rock</option>
    <option value="country">Country</option>
    <option value="indie">Indie</option>
    <option value="metal">Metal</option>
    <option value="punk">Punk</option>
    <option value="jam">Jam</option>
    <option value="electronic">Electronic</option>
    <option value="random">Random</option>
  </select><br>
  Generated Words:
  <select name="number_of_words">
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select><br>
  First Word "The": <input type="checkbox" name="first-the"><br>
  Include "& The": <input type="checkbox" name="and-the"><br>
  <input class="chill-generators-submit" type="submit" value="Generate Band Name">
</form>
<?php
}
?>