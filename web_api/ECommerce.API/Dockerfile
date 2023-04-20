FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 7149

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["ECommerce.API.csproj", "."]
RUN dotnet restore "./ECommerce.API.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "ECommerce.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ECommerce.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ECommerce.API.dll"]