const fs = require('fs');

// fs.existsSync();

// fs.exists(); // Ovaa funkcija se koristi za da se proveri dali postoi nekoj fajl.

const create = (filePath, content) => {
  try {
    const fileExists = fs.existsSync(filePath);
    if (fileExists) {
      // na ovoj nacin vo javaScript se vrakja greska. Ke se frli dokolku postoi fajlot.
      throw {
        success: false,
        message: 'The file alredy exists !'
      }
    } else {
      // ako ne postoi fajlot go kreirame
      fs.writeFileSync(filePath, content);

      return {
        success: true,
        message: 'The file has been created !'
      };
    }
  }
  catch (error) {
    return (error)
  }
}
// const data = {
//   firstName: 'James',
//   lastName : 'Hatfild'
// };

create('./create-file.txt', 'hello');
