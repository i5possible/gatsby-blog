export default function (plop) {
  // create your generators here
  plop.setGenerator('draft', {
    description: 'create draft blog',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'draft file name please'
    }],
    actions: [{
      type: 'add',
      path: 'content/blog/draft/{{name}}.md',
      templateFile: 'plop-templates/blog.md'
    }]
  });
};
