import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import { Grid, Paper, Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "500px",
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function Start() {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <StaticImage
              src="../images/static/author.jpg"
              className={classes.image}
              width={400}
              alt="fake author"
            />
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h4" component="h1" align="center">
              About me
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              This site is created for pactise of two main libs: Gatsby and
              Material UI
            </Typography>
            <Typography variant="h5" component="h2" align="center">
              Github{" "}
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              You may find my other work on my
              <Link href="http://github.com/jzarzeczny"> GH</Link>
            </Typography>
            <Typography variant="h5" component="h2" align="center">
              State
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Currently developed first stage. Read more on my GH!{" "}
            </Typography>
          </Grid>
        </Grid>
        <Typography varaint="h5" component="h3" gutterBottom>
          Lorem ipsum for formatting puropses.
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
          accumsan ipsum. Mauris commodo bibendum arcu, sed porttitor lorem
          iaculis in. Nunc cursus, mi a condimentum pulvinar, urna neque
          sagittis eros, ut viverra leo eros imperdiet orci. Fusce purus urna,
          feugiat non quam nec, dictum porta tellus. Quisque porttitor volutpat
          mauris eget laoreet. Praesent odio tellus, pharetra quis diam in,
          porta euismod diam. Mauris molestie pharetra risus non hendrerit.
          Vestibulum ac eleifend leo. Aenean venenatis rutru m semper. Integer
          sem nibh, ultrices eu tempus quis, maximus sit amet odio. Pellentesque
          condimentum, enim a aliquet rhoncus, dui sapien semper erat, non
          feugiat tellus lectus vitae nisl. Cras a dictum lacus. Nam sapien
          elit, rutrum ac enim vestibulum, accumsan condimentum purus. Morbi
          aliquet fermentum ipsum, non luctus velit euismod nec. ### Curabitur
          in suscipit felis. Morbi vestibulum ornare viverra. Sed eu quam et
          arcu pharetra eleifend eu non lacus. Nullam sit amet lacus vestibulum,
          sodales massa quis, luctus elit. Quisque blandit, dui eu sagittis
          accumsan, tortor dolor suscipit nibh, et placerat dui neque sed ante.
          Suspendisse auctor sed felis non consectetur. Donec in ante at libero
          condimentum bibendum. In hac habitasse platea dictumst. Aliquam leo
          magna, ullamcorper non leo quis, tincidunt bibendum nisl. Sed
          tristique, tellus et dapibus vehicula, magna nulla dictum nisi, a
          bibendum odio est nec dui. Nulla facilisi. Donec eu justo pharetra,
          placerat ipsum eu, aliquet nisi. Phasellus egestas suscipit ante, eget
          tristique leo feugiat vel. Etiam auctor libero mi, eu hendrerit dolor
          eleifend vitae. Ut interdum efficitur est, in sodales sem egestas
          posuere. Morbi nisi est, volutpat at rhoncus in, euismod sed eros. In
          dapibus auctor diam. Nunc efficitur, sapien id venenatis mattis,
          lectus sapien ornare dui, nec fringilla metus eros in nunc. Morbi
          ligula risus, placerat et libero id, bibendum dictum odio. Fusce nunc
          ligula, rutrum at ligula et, mattis condimentum justo. Donec pretium
          pulvinar nisl, ac viverra tortor malesuada et. Phasellus sagittis
          finibus mauris nec luctus. Ut eu auctor tellus. Aenean varius, neque
          eu placerat semper, ex mi placerat odio, ac euismod purus lectus eu
          diam. In consectetur, quam sit amet fringilla gravida, ligula diam
          aliquet dolor, vitae sagittis odio urna nec sapien. Sed ornare, libero
          non euismod tempor, tellus mi molestie augue, at fringilla tellus
          justo in dui. Sed vel ipsum lacus. Fusce sollicitudin ac leo id
          facilisis. Mauris in rhoncus ex, pretium faucibus metus. Praesent at
          massa sit amet lectus porttitor sodales pretium finibus urna. Sed vel
          egestas quam, vel rhoncus orci. Integer accumsan libero lorem, eu
          varius est hendrerit nec. Maecenas est urna, sagittis ac pretium sed,
          scelerisque sed ex. ## Nam faucibus viverra massa. Aenean sed ante
          pharetra, varius nisi eu, tempor tellus. Phasellus risus diam,
          porttitor at hendrerit non, elementum id urna. Nunc vitae vulputate
          orci, ut imperdiet lectus. Donec pellentesque ornare est ut volutpat.
          Etiam ultricies aliquam libero, eget rutrum neque fringilla non.
          Vivamus sit amet ante lectus. Nunc in laoreet ante. Mauris pulvinar
          arcu est, et pretium metus aliquet sit amet. Aliquam erat volutpat.
          Morbi ac arcu ac felis finibus faucibus. Nulla nec dictum nisi. Morbi
          et tellus in turpis auctor gravida. Nunc lorem urna, semper suscipit
          blandit accumsan, tincidunt nec metus. Phasellus aliquam molestie
          lobortis. Sed a faucibus velit. In semper vitae augue eu rhoncus.
          Praesent vulputate, massa sed aliquam porttitor, tortor nulla auctor
          nunc, vel viverra enim justo vitae nisi. Nullam ornare, dolor in
          scelerisque varius, felis dolor porta tellus, ac molestie sem risus
          vel turpis. Fusce vestibulum felis et molestie malesuada. Ut rhoncus
          id ante non porttitor. Cras venenatis, mi sit amet molestie porttitor,
          orci libero hendrerit elit, eu hendrerit nisi ligula non erat. Ut
          magna ligula, vulputate vitae viverra sit amet, tempus in elit. Sed ut
          volutpat lorem. Quisque tincidunt massa neque, in finibus urna blandit
          nec. Aliquam erat volutpat. Ut sodales quam ac tincidunt sagittis.
          Cras non sapien libero. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Curabitur vitae sapien
          vehicula, suscipit libero quis, sagittis lacus. Nunc pellentesque
          fermentum ultrices. ### Integer at enim risus. Etiam maximus aliquet
          tincidunt. Curabitur in lorem purus. Sed tempor, lorem eget aliquam
          tristique, justo risus blandit nunc, ac pretium nulla nulla sit amet
          mauris. Mauris a magna hendrerit, varius turpis in, sodales elit.
          Fusce eget pulvinar odio, ac efficitur nunc. Duis finibus aliquet est,
          nec imperdiet lacus scelerisque sed. Ut ut magna sodales, gravida diam
          eget, egestas nunc. Aliquam varius ut erat sed pulvinar. Phasellus
          risus turpis, laoreet eget efficitur id, fringilla ac massa. Praesent
          magna massa, ornare at pretium in, ultrices non mauris. Aenean
          venenatis sapien eget efficitur porttitor. Nulla et nisl vitae tellus
          consequat placerat. Proin faucibus metus nisi. Aenean tincidunt ex
          velit, sit amet dignissim enim tempus ac. Nulla sed dolor vestibulum,
          eleifend metus quis, eleifend nunc. Maecenas sagittis risus sit amet
          lacus dignissim ullamcorper. Suspendisse potenti. In ornare vestibulum
          nibh, in ornare dolor luctus nec. Donec orci metus, ullamcorper sit
          amet enim eu, eleifend tempor eros. Maecenas elementum magna nec mi
          scelerisque, vitae aliquet nunc dignissim. Nam justo libero, facilisis
          ut mauris et, viverra hendrerit dui. Nunc varius tincidunt sapien,
          eget fringilla tellus tempor sit amet. Aliquam a gravida libero. Fusce
          vitae iaculis erat, sed elementum lectus. Phasellus ac nisi nisi.
        </Typography>
      </Paper>
    </Layout>
  );
}
