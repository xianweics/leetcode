const { exec } = require('child_process')
const { promisify } = require('util')
const inquirer = require('inquirer')
const chalk = require('chalk')

const execPromise = promisify(exec)
const statusMessage = [
  {
    type: 'confirm',
    name: 'status',
    message: 'Whether to continue, run git add：'
  }
]
const addMessage = [
  {
    type: 'confirm',
    name: 'add',
    message: 'Whether to continue, run git commit：'
  }
]
const commitMessage = [
  {
    type: 'list',
    name: 'type',
    message: 'Place choose commit type：',
    choices: ['note', 'update', 'delete']
  },
  {
    type: 'input',
    name: 'problemNum',
    message: 'Place fill in problem number：'
  },
  {
    type: 'input',
    name: 'problemName',
    message: 'Place fill in problem title：'
  },
  {
    type: 'input',
    name: 'message',
    message: 'Place fill in commit message：'
  }
]
const consoleInfo = info => {
  if (info.stderr) {
    process.exit(1)
  }
  console.log(chalk.green.bold(info.stdout))
}

const run = async () => {
  try {
    const status = await execPromise('git status')
    consoleInfo(status)
    const statusResult = await inquirer.prompt(statusMessage)
    if (!statusResult.status) {
      process.exit(1)
    }
    await execPromise('git add ./ ')
    const addResult = await inquirer.prompt(addMessage)
    console.log(addResult)
    if (!addResult.add) {
      process.exit(1)
    }
    const { type, problemNum, problemName, message } = await inquirer.prompt(
      commitMessage
    )
    await execPromise(
      `git commit -m'${type}: 第${problemNum}题，题目：${problemName}；提交信息：${message}' `
    )
    console.log(chalk.green.bold('Successfully'))
  } catch (e) {
    process.exit(1)
    console.log(e.message)
  }
}
run()
