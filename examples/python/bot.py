import discord
from discord.ext import commands

# Create a bot instance
bot = commands.Bot(command_prefix="!")

# Event: Bot is ready
@bot.event
async def on_ready():
    print(f"Logged in as {bot.user}")

# Command: Respond to !ping
@bot.command()
async def ping(ctx):
    await ctx.send("Pong!")

# Run the bot
bot.run("YOUR_TOKEN_HERE")
