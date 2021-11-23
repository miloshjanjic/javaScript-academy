const fs = require('fs');

class Crud {
    add(filePath, data) {
        try {
         const fileExists = fs.existsSync(filePath);
         if(fileExists)
         {
            let content = JSON.parse(this.read(filePath));
            let niza = [];
            niza.push(content);
            niza.push(data);
            let converted =  JSON.stringify(niza);
            fs.writeFileSync(filePath, converted);
         } else {
            throw {
                success: false,
                message: 'File does not exists'
            };
         }
        } catch(error) {
            return error;
        }
        
    }

    read(filePath) {
        try {
          const fileExists = fs.existsSync(filePath);
          if(fileExists)
          {
              const content = fs.readFileSync(filePath,'utf-8');
              return content;
          }
          else
          {
              throw {
                  success: false,
                  message: 'File does not exists'
              };
          }
        } catch (error) {
            return error;
        }
    }

    readId(filePath, id)
    {
        try {
            const fileExists = fs.existsSync(filePath);
            if(fileExists)
            {
                const content = JSON.parse(this.read(filePath));
                content.forEach((element) => {
                    if (element.id === id)
                    {
                        console.log(element);
                    }
                })
            }
            else
            {
                throw {
                    success: false,
                    message: 'File does not exists'
                };
            }
          } catch (error) {
              return error;
          }
    }

    updateAge(filePath, id, age)
    {
        try {
            const fileExists = fs.existsSync(filePath);
            if(fileExists)
            {
                let data = JSON.parse(this.read(filePath));
                data.forEach(element => {
                    if (element.id === id)
                    {
                        element.age = age;
                    }
                });
                let converted = JSON.stringify(data);
                console.log('Update console');
                console.log(data);
                fs.writeFileSync(filePath, converted);
            }
            else {
                throw {
                    success: false,
                    message: 'File does not exists'
                };
            }
        }
        catch (error) {
            return error;
        }
    }

    delete(filePath, id)
    {
        try {
          const fileExists = fs.existsSync(filePath);
          if(fileExists)
          {
              let data = JSON.parse(this.read(filePath));
              const filtered = data.filter((el) => {
                  return el.id !== id;
              });
              console.log(filtered);
              let path = filePath;
              fs.unlinkSync(filePath);
              fs.writeFileSync(path, JSON.stringify(filtered));
          }
          else {
              throw {
                success: false,
                message: 'Can not delete object from json array' 
              };
          }
        } catch(error) {
            return error;
        }
    }
};

module.exports = Crud;