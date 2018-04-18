<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <RadSideDrawer id="drawer" ref="drawer" showOverNavigation="true">
      <StackLayout  background="white" ~drawerContent>
        <StackLayout class="sidedrawer-header" background="#E27834"></StackLayout>
        <StackLayout >
          <TextView class="sidedrawer-list-item">Events</TextView>
          <TextView class="sidedrawer-list-item">Conferences</TextView>
          <TextView class="sidedrawer-list-item">Talkfunnel</TextView>
        </StackLayout>
      </StackLayout>
      <StackLayout ~mainContent>
        <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
        <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
      </StackLayout>
    </RadSideDrawer>

  </Page>
</template>
<style>
  #drawer > StackLayout {
    height: 100%;
  }
  .sidedrawer-list-item {
    padding-left: 10;
  }
</style>