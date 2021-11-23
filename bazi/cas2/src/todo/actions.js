const Todo = require('./model');

// List all todos
async function list (_,res,next){
  const todos = await Todo.find({});
  res.json(todos);

  await next;
}

// Read todos by ID
async function get (req,res,next){
  const { todoId } = req.params

  const findTodoById = await Todo.findById({ _id: todoId});
  res.json(findTodoById);

  await next;
}

// Create todo
async function create (req,res,next){
  const { title } = req.body;

  res.json(await Todo.create({ title, createdAt: new Date()}));
  // res.send('OK');
  await next;
}

// Update
async function update (req,res,next){
  const { todoId} = req.params;
  const { title} = req.body;

  res.json(await Todo.updateOne({ _id: todoId}, { title}));
  
  await next;
}
// Delete 
async function del (req,res,next){  
  const { todoId } = req.params;

  await Todo.deleteOne({ _id: todoId});
  res.send();

  await next;
}

module.exports = {
  list,
  get,
  create,
  update,
  del
};