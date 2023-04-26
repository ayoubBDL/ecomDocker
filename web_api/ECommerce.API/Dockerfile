# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/dotnet/sdk:6.0 as build-env
WORKDIR /src
COPY ./*.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /publish
ENV ASPNETCORE_URLS http://+:80
ENTRYPOINT ["dotnet", "run"]
# FROM mcr.microsoft.com/dotnet/aspnet:6.0 as runtime
# WORKDIR /publish
# COPY --from=build-env /publish .
# EXPOSE 80
